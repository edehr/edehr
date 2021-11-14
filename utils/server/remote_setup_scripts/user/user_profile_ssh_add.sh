#!/usr/bin/env bash

echo "HOME is $HOME"
UH=$HOME
USER_BASH=$UH/.bashrc
CUSTOMIZATION_NAME=.bash_customize_ssh
CUSTOMIZATION_FILE=resource/$CUSTOMIZATION_NAME
USER_CUSTOM_HOME=$UH/$CUSTOMIZATION_NAME

addCustomToHome=0
addToProfile=0

echo "See if $USER_BASH and $CUSTOMIZATION_FILE exist"
if [ -f "$USER_BASH" ]  && [ -f $CUSTOMIZATION_FILE ]; then
  echo "Yes. So next see if $USER_BASH imports our customization"
  # test if user profile needs our customization
  if ! grep -q "${CUSTOMIZATION_NAME}" $USER_BASH
  then
    echo "No so set flag to source our customization"
    addToProfile=1
  fi

  echo "See if $USER_CUSTOM_HOME exists"
  if [ ! -f USER_CUSTOM_HOME ]; then
    echo "No so set flag to create it"
    addCustomToHome=1
  fi
fi

echo "Now do our work. The flags are addToProfile=$addToProfile  addCustomToHome=$addCustomToHome"

if [ $addToProfile -gt 0 ]; then
  cp "${USER_BASH}" "${USER_BASH}".bak
  echo 'if [ -f ~/.bash_customize_ssh ]; then source ~/.bash_customize_ssh; fi' >> "$USER_BASH"
fi

if [ $addCustomToHome -gt 0 ]; then
  echo "Copy $CUSTOMIZATION_FILE to $USER_CUSTOM_HOME"
  cp $CUSTOMIZATION_FILE "$USER_CUSTOM_HOME"
fi
