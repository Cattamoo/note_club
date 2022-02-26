import { getDatabase, ref, onValue, off, set, remove } from "firebase/database";

class NoteRepository {
    syncCards(userId, onUpdate) {
        const db = getDatabase();
        const noteRef = ref(db, `${userId}/note`);
        onValue(noteRef, (snapshot) => {
            const data = snapshot.val();
            data && onUpdate(data);
        });
        return off;
    }
    saveNote(userId, note) {
        const db = getDatabase();
        set(ref(db, `${userId}/note/${note.id}`), note);
    }
    removeNote(userId, id) {
        const db = getDatabase();
        remove(ref(db, `${userId}/note/${id}`));
    }
}

export default NoteRepository;