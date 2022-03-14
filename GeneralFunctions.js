// High e and low E are distinguished by captialization. Low "E" is Uppercase and High "e" is lowercase
// First export is readline
export const readline = require('readline');
export const guitarSrings = ["E", "B", "G", "D", "A", "e"];
export const naturalNotes = ["C", "D", "E", "F", "G", "A", "B"];
export const sharpNotes = ["C#", "D#", "F#", "G#", "A#"];
export const flatNotes = ["Db", "Eb", "Gb", "Ab", "Bb"];
// ttNotes stands for Total Twelve Notes (S for sharp, F for flats)
export const ttNotesS = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
export const ttNotesF = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
export let sNote = "Error"; 
export let fNote = "Error"; 
export let nNote = "Error";
export let ttNoteS = "Error";
export let ttNoteF = "Error";
export function RanNNote(naturalNote) {
    naturalNote = naturalNotes[Math.floor(Math.random() * naturalNotes.length)];
    return naturalNote;
}
export function RanFNote(flatNote) {
    flatNote = flatNotes[Math.floor(Math.random() * flatNotes.length)];
    return flatNote;
}
export function RanSNote(sharpNote) {
    sharpNote = sharpNotes[Math.floor(Math.random() * sharpNotes.length)];
    return sharpNote;
}
export function RanTTNoteS(totaltwelveNoteSharp) {
    totaltwelveNoteSharp = ttNotesS[Math.floor(Math.random() * ttNotesS.length)];
    return totaltwelveNoteSharp;
}
export function RanTTNoteF(totaltwelveNoteFlat) {
    totaltwelveNoteFlat = ttNotesF[Math.floor(Math.random() * ttNotesF.length)];
    return totaltwelveNoteFlat;
}


export function ask(prompt) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.question(prompt, (answer) => {
            resolve(answer)
            rl.close();
        });
    })
}