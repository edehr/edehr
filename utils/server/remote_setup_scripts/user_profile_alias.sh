#!/usr/bin/env bash

echo "HOME is $HOME"
echo "PWD is $PWD"
UH=$HOME
ALIAS_FILENAME=.bash_aliases
ALIAS_HOME=$UH/$ALIAS_FILENAME
CUSTOM_ALIAS_FILE=resource/custom_aliases
CUSTOM_ALIAS_TEST_TEXT=customAliases
USER_BASH=$UH/.bashrc
USER_ALIAS=$UH/$ALIAS_FILENAME

addCustom=0
addToProfile=0
addAliasToBash=0
addAliases=0
createAliases=0

echo "See if $USER_BASH and $CUSTOM_ALIAS_FILE exist"
if [ -f $CUSTOM_ALIAS_FILE ]  && [ -f $USER_BASH ]; then
  echo "Yes. So next see if $USER_BASH imports $ALIAS_FILENAME"
  if ! grep -q $ALIAS_FILENAME $USER_BASH; then
    echo "No so set a flag to update $USER_BASH"
    addAliasToBash=1;
  fi

  echo "See if $ALIAS_HOME exists"
  if [ -f $ALIAS_HOME ]; then
    echo "yes it does so see if $USER_ALIAS contains the text: $CUSTOM_ALIAS_TEST_TEXT"
    if grep -q $CUSTOM_ALIAS_TEST_TEXT $USER_ALIAS
    then
      echo "Yes so we do nothing to $USER_ALIAS"
      addAliases=0
    else
      echo "No so we set a flag to adjust the file"
      # else we set a flag to
      addAliases=1
    fi
  else
    createAliases=1
  fi
fi

echo "Now do our work. The flags are addAliasToBash=$addAliasToBash  createAliases=$createAliases addAliases=$addAliases"

if [ $addAliasToBash -gt 0 ]; then
  echo "Get $USER_BASH to source alias file"
  REF="if [ -f ~/.bash_aliases ]; then . ~/.bash_aliases; fi"
  echo $REF >> ${USER_BASH}
fi

if [ $createAliases -gt 0 ]; then
  echo "Copy $CUSTOM_ALIAS_FILE to $USER_ALIAS"
  cp $CUSTOM_ALIAS_FILE $USER_ALIAS
fi

if [ $addAliases -gt 0 ]; then
  echo "Insert $CUSTOM_ALIAS_FILE into $USER_ALIAS"
  cat $CUSTOM_ALIAS_FILE >> $USER_ALIAS
fi
