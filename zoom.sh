function zoom() {
  # This is the path to where your lerna project is
  LERNA="/Users/joshclyde/stuff/gitrepos/ez_lerna_helper/lerna_structure";
  # This is the path to the packages folder of your lerna project
  ROOT="/Users/joshclyde/stuff/gitrepos/ez_lerna_helper/lerna_structure/packages";
  if [ -z "$1" ]
  then
    echo "🚀  Zooooooming to your lerna repo..."
    cd $LERNA
    return
  fi

  shopt -s nullglob
  array=($(ls "$ROOT/"))
  shopt -u nullglob # Turn off nullglob to make sure it doesn't interfere with anything later

  MATCHES=()
  counter=0
  for i in "${array[@]}"
  do
    if [[ $i =~ .*$1.* && ( -z "$2" || $i =~ .*$2.* ) ]]
    then
      MATCHES+=($i)
      counter=$((counter+1))
      PROJ="$i"
    fi
  done

  if [ "$counter" -eq "0" ]
  then
    echo "None of the packages contained '$1' in their name."
    return
  elif [ "$counter" -eq "1" ]
  then
    echo "🚀  Zooooooming to $PROJ..."
    cd $ROOT/$PROJ
  else
    if [ ! -z "$2" ]
    then
      echo "$counter packages contain '$1' and '$2' in their name."
    else
      echo "$counter packages contain '$1' in their name."
    fi
    echo ""
    echo "  0 -> exit"
    counter_2=1
    for i in "${MATCHES[@]}"
    do
      echo "  $counter_2 -> $i"
      counter_2=$((counter_2+1))
    done
    read  -n 1 -p "Zoom to -> " userinput
    echo ""

    re='^[0-9]+$'
    if ! [[ $userinput =~ $re ]] ; then
      return
    fi
    if [ "$userinput" -eq "0" ]
    then
      return
    fi

    echo ""
    userinput=$((userinput-1))
    if [ -z "${MATCHES[$userinput]}" ]
    then
      return
    fi
    echo "🚀  Zooooooming to ${MATCHES[$userinput]}..."
    cd $ROOT/${MATCHES[$userinput]}
  fi
}
