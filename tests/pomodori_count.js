const Environment = imports.ui.environment;
const Clutter = imports.gi.Clutter;
const St = imports.gi.St;

function init() {
    Environment.init();

    let stage = Clutter.Stage.get_default();
    let context = St.ThemeContext.get_for_stage (stage);
}

init();

let stage = Clutter.Stage.get_default();

let completed = new St.BoxLayout({
    width:200,
    style: 'padding: 10px;'
});
stage.add_actor(completed, {x_align: St.Align.MIDDLE});

completed.add(new St.Label({text:'Completed'}));

let bin = new St.Bin({ x_align: St.Align.END });
let countLabel = new St.Label();
bin.add_actor(countLabel);

completed.add(bin, { expand: true, span: -1, align: St.Align.END });

countLabel.text = Array(4 + 1).join('\u25cf');
countLabel.text += '\u25d6';

stage.show();
Clutter.main();