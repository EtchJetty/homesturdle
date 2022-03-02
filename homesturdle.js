module.exports = {
    title: "Homesturdle", 
    author: "EtchJetty (<a href='https://twitter.com/EtchJetty'>@EtchJetty</a>)",
    modVersion: 2.1,
    //Code format copied from seymour's mod. 
    // locked: '007322',
    summary: 'Homestuck Wordle (requires internet)',
    description: `<p>Troll name themed fork of the open-source react-wordle project.</p>`,

    edit(archive) {
       archive.tweaks.modHomeRowItems.push(
        {
            href: "/wordle",
            thumbsrc: "https://file.garden/X8UcPOa95myVypAH/fic/plagiarism/wordle.png",
            // date: "July 2020 - January 2022",
            title: 'Homesturdle',
            description: `<p>Homestuck-themed fork of react-wordle. New word every day. (Requires internet connection.)</p>`
        }
       );
    },
    
    browserPages: {
        'WORDLE': { // maps to /zombo
            component: {
                title: () => "Homesturdle",
                template: `<!DOCTYPE html>
<!-- saved from url=(0030)https://mspfa.com/?s=40349&p=1 -->
<html class="p1"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body><iframe src="https://etchjetty.github.io/homesturdle" class="second-row" style="position: fixed; right: 0px; width: 100%; border: none; margin: 0; padding: 0; overflow: hidden; z-index: 999999; height: calc(100% - 82px);" allow="clipboard-read; clipboard-write; fullscreen; web-share;"></iframe>Loading...</body></html>`,
                scss: ``
            },
        }   
    }
}