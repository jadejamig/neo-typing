import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TypingState {
    sentence: string;
    userInput: string;
}

const initialState: TypingState = {
    sentence: '',
    userInput: '',
};

const getRandomSentence = () => {
    const sentences = [
        "The quick brown fox jumps over the lazy dog.",
        "Pack my box with five dozen liquor jugs.",
        "Jinxed wizards pluck ivy from the big quilt.",
        // Add more sentences as needed
    ];
    return sentences[Math.floor(Math.random() * sentences.length)];
};

const typingSlice = createSlice({
    name: 'typing',
    initialState,
    reducers: {
        generateSentence: (state) => {
            state.sentence = getRandomSentence();
        },
        setUserInput: (state, action: PayloadAction<string>) => {
            state.userInput = action.payload;
        },
        resetUserInput: (state) => {
            state.userInput = '';
        },
    },
});

export const { generateSentence, setUserInput, resetUserInput } = typingSlice.actions;

export default typingSlice.reducer;