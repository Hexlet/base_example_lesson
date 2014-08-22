FROM       mokevnin/hexlet-vagrant
MAINTAINER mokevnin

WORKDIR /root/exercise

RUN apt-get install -y redis-server
RUN apt-get install -y python-setuptools
RUN easy_install pip
RUN pip install redis
