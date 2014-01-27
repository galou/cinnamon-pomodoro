// GJS_PATH="cinnamon-pomodoro/pomodoro@gregfreeman.org"/ GI_TYPELIB_PATH="/usr/lib/cinnamon:/usr/lib/muffin" ./run-js-test cinnamon-pomodoro/tests/sound.js

const Mainloop = imports.mainloop;
const Environment = imports.ui.environment;
Environment.init();

const SoundModule = imports.sound;

tickPath = SoundModule.addPathIfRelative("tick.ogg", "/home/greg/dev/cinnamon/cinnamon-pomodoro/pomodoro@gregfreeman.org/sounds");
let soundTick = new SoundModule.SoundEffect(tickPath);

soundTick.play({loop: true});

Mainloop.run('timerTick');
