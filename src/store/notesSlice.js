import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addDoc, collection, query , where, getDocs, deleteDoc, doc} from 'firebase/firestore';
import { db } from '../firebase/config';  

export const notesSlice = createSlice({
  name: 'notes',
  initialState:{
    notes:[],
    status: 'idle'
  },
  reducers: {
    // addNote: (notes, action) => {
    //   let newNote = action.payload;
    //   newNote.id = notes.length ? Math.max(...notes.map(note=> note.id)) + 1 : 1;
    //   notes.push(newNote);
    // },
    // eraseNote: (notes, action) => {
    //     return notes.filter(note => note.id != action.payload);
    // },
    // eraseBookNotes: (notes, action) => {
    //     return notes.filter(note => note.book_id != action.payload);
    // }
  },
  extraReducers(builder){
    builder
    .addCase(fetchNotes.fulfilled, (state, action) => {
      state.status = "succeeded"
      state.notes = action.payload
    })
    .addCase(addNote.fulfilled , (state, action) => {
      state.status = 'succeeded'
      state.notes.push(action.payload)
    })
    .addCase(eraseNote.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.notes = state.notes.filter(note => note.id != action.payload)
    })
    .addCase(eraseBookNotes.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.notes = state.notes.filter(note => note.book_id != action.payload)
    })

  }
})

export const {  } = notesSlice.actions;

export const selectNotes = state => state.notes;

export default notesSlice.reducer;


export const fetchNotes = createAsyncThunk("notes/fetchNotes", async(payload) => {
  const q = query(collection(db, 'notes'), where ('book_id', '==', payload))
  const querySnapshot = await getDocs(q);
  const notesList = [];
  querySnapshot.forEach((doc) => {
    notesList.push({
      id: doc.id,
      ...doc.data()
    })
  })
  return notesList
})

export const addNote = createAsyncThunk("notes/addNote" , async(payload) => {
  const collectionRef = collection(db, "notes");
  let newNote = payload;
  const docRef = await addDoc(collectionRef, newNote)
  newNote.id = docRef.id;
  return newNote

})

export const eraseNote = createAsyncThunk("notes/eraseNote" , async(payload) => {
  await deleteDoc(doc(db, 'notes', payload))
  return payload
})


export const eraseBookNotes = createAsyncThunk("notes/eraseBookNotes", async(payload) => {
  console.log("erasebooknotes fired")
  const collectionRef = collection(db, 'notes')
  
})