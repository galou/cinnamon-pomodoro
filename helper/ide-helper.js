var imports = {};

imports.timer = {};
imports.timer.TimerQueue = TimerQueue;
imports.timer.TimerQueue.prototype = TimerQueue.prototype;
imports.timer.Timer = Timer;
imports.timer.Timer.prototype = Timer.prototype;

imports.sound = {};
imports.sound.SoundEffect = SoundEffect;
imports.sound.SoundEffect.prototype = SoundEffect.prototype;