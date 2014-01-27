// GI_TYPELIB_PATH="/usr/lib/cinnamon:/usr/lib/muffin" run-js-test tests/timer.js

const Mainloop = imports.mainloop;
const Environment = imports.ui.environment;
Environment.init();

imports.searchPath.unshift('.');
const TimerModule = imports.timer;

function timerTick(timer) {
    print(timer.getName() + ': ' + timer.getTicksRemaining());
}

var pomodoroTimer = new TimerModule.Timer({ name: 'pomodoro', timerLimit: 5 });
var shortBreakTimer = new TimerModule.Timer({ name: 'short_break', timerLimit: 3 });

var timerQueue = new TimerModule.TimerQueue();

timerQueue.addTimer(pomodoroTimer);
timerQueue.addTimer(shortBreakTimer);
timerQueue.addTimer(pomodoroTimer);
timerQueue.addTimer(shortBreakTimer);
timerQueue.addTimer(pomodoroTimer);
timerQueue.addTimer(shortBreakTimer);

pomodoroTimer.connect('timer-started', timerTick);
pomodoroTimer.connect('timer-tick', timerTick);
shortBreakTimer.connect('timer-started', timerTick);
shortBreakTimer.connect('timer-tick', timerTick);

timerQueue.connect('timer-queue-finished', function(timerQueue) {
    print('complete');
});

timerQueue.start();

Mainloop.run('timerTick');
