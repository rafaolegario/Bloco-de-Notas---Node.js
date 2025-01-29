const path = require('path')
const fs = require('node:fs')
const readline = require('node:readline')

const NOTES_DATABASE = []

function ConsoleQuestion(question){
    const rl = readline.createInterface({input: process.stdin, output:process.stdout})

    return new Promise((resolve)=>{
       rl.question(question, (answer)=>{
        resolve(answer);
        rl.close()
       })
    })

}

async function createNote(){
    try{
        const NoteName = await ConsoleQuestion("Qual sera o nome da nota: ")
        const Note = await ConsoleQuestion('NOTA: ')

        const DIR_PATH = path.resolve("./NotesStorage")
        const FILE_PATH = path.join(DIR_PATH,NoteName + ".txt")

        if(!fs.existsSync(DIR_PATH)){
            fs.mkdirSync(DIR_PATH)
        }

        fs.writeFileSync(FILE_PATH, Note)

        const NOTE_OBJECT = {
            PATH: FILE_PATH,
            ID: Math.floor(Math.random(1)*2000)
        }
        NOTES_DATABASE.push(NOTE_OBJECT)

        console.clear()
        console.log("Nota criada com sucesso")

        backToMenu()
       

    } catch(err){
        console.log("Erro:", err)
    }
    

}

function listNotes(){
    if(NOTES_DATABASE.length == 0){
        console.log('Nenhuma nota registrada')
        backToMenu()
        return
    }

    NOTES_DATABASE.forEach( (note)=>{
        console.log("-----------------")
        const noteName = path.basename(note.PATH)
        console.log("Nome da nota: "+ noteName)
        console.log("ID: " + note.ID)
        const readNote = fs.readFileSync(note.PATH)
           
        console.log("Nota: " + readNote)
        console.log("-----------------")
                
        
    })

    backToMenu()
    
}

function findNotes(id) {
    const note = NOTES_DATABASE.find((note)=> note.ID == id)
    return note
}

async function readNote(){
    let NoteId = await ConsoleQuestion("Qual id da nota que quer ler?: ")
    NoteId = parseInt(NoteId)

    const findNote = findNotes(NoteId)

    if(!findNote){
        console.log("Essa nota não existe")
        backToMenu()
        return
    }

    const readNote = fs.readFileSync(findNote.PATH)
    const noteName = path.basename(findNote.PATH)
    console.clear()
    console.log(`
    ------------------
    Nome da nota: ${noteName}
    ID: ${findNote.ID}
    Nota: ${readNote}
    ------------------`)
    
    backToMenu()
}

async function deleteNote() {
    let NoteId = await ConsoleQuestion("Qual id da nota que quer deletar?: ")
    NoteId = parseInt(NoteId)

    const findNote = findNotes(NoteId)

    if(!findNote){
        console.log("Essa nota não existe")
        backToMenu()
        return
    }

    fs.unlinkSync(findNote.PATH)
    const noteName = path.basename(findNote.PATH)
    console.clear()
    console.log(`Nota ${noteName} excluida com sucesso`)
    const noteIndex = NOTES_DATABASE.findIndex(note => note.ID == NoteId)
    NOTES_DATABASE.splice(noteIndex,1)
    backToMenu()
}

async function backToMenu() {
    const confirm = await ConsoleQuestion('Continuar? s/n: ')

    if(confirm.trim().toLowerCase() == 's'){
        Menu()
    }else{
        ("Encerrando...")
        process.exit(1)
    }
    
}

async function Menu() {
    console.clear()

    const question = `------BLOCO DE NOTAS------ \n
    Notas existentes: ${NOTES_DATABASE.length}\n
     1- Criar uma nova notação\n
     2- Listar todas notações\n
     3- Ler uma notação especifica\n
     4- Excluir uma notação\n
     5- Sair do programa\n
     ESCOLHA UM NUMERO: `
    
    const choice = await ConsoleQuestion(question)
    console.clear()

   
        switch(choice){
            case "1":
                
                createNote()
            break;
            case "2":
                listNotes()
            break;
            case "3":
                readNote()
            break;
            case "4":
                deleteNote()
            break;
            case "5":
                console.log("Saindo...")
                process.exit(1)
            break;
            default:
                console.log("Selecione uma opção valida")
                backToMenu()

        }
}

Menu()