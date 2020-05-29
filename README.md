# Pi Commander Mobile application
An Android application which interacts with Raspberry Pi devices via microservices.

## Development
### Run locally
Install all dependencies first
```
npm install
```
Make sure you have Android Studio installed and also created an emulator to run your application.

Install Android studio with the following commands:
```
sudo apt update
sudo apt install snapd
```

Then install the snap
```
sudo snap install android-studio --classic
```

On Android studio choose AVD manager, follow the steps to create a new virtual device.
I've faced issues with /dev/kvm permissions, which resolved by installing qemu-kvm

```
sudo apt install qemu-kvm
```

Then I've added the user to the kvm group
```
sudo adduser <username> kvm
```

To run the application execute the `npm run android` command.

## CI
Application build is on Travis CI.

Travis builds can be found here: https://travis-ci.org/github/gdyrrahitis/pi-commander-mobile

## Microservices
The raspberry pi device(s) is/are awaiting for commands, which come in form of messages. I'm using RabbitMQ to publish commands to the consumers, which are daemons running on the raspberry pi device(s).

I've built some microservices using Python and [Nameko](https://github.com/nameko/nameko) are hosted on Heroku. Nameko is a great choice which works with RabbitMQ and supports features such as AMQP RPC microservices, pub-sub, websockets and REST APIs.
