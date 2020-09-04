#!/usr/bin/env bash

OH_MY_ZSH_URL='https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh'
BULLET_TRAIN_URL='https://raw.github.com/caiogondim/bullet-train-oh-my-zsh-theme/master/bullet-train.zsh-theme'

echo *************** Installing Oh-My-Zsh ********************

wget $OH_MY_ZSH_URL -O - | /bin/zsh

echo
echo     ----------- Add the bullet-train theme -----------
wget -P ~/.oh-my-zsh/themes $BULLET_TRAIN_URL

echo
echo     ----------- Make bullet-train the default theme -----------
sed -i 's/robbyrussell/bullet-train/g' ~/.zshrc

echo ***************** Oh-My-Zsh Installed *********************

exit
