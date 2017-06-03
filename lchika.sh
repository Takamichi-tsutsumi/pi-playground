#!/bin/sh

V=0
while true
do
  echo 'Chika'
  sleep 0.2
  echo $(($V % 2)) > /sys/class/gpio/gpio2/value
  V=$(($V+1))
done
