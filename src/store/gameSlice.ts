import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
    currentInput: string;
    currentWord: string;
    currentIndex: number;
    currentCharacterIndex: number;
    words: string[];
    wordsRemaining: string[];
    wordsComplete: string[];
    snippet: string;
    isOver: boolean;
    isStarted: boolean;
    wordsErrorList: string[];
    wordsCorrectList: string[];
}

const initialState: GameState = {
    currentInput: '',
    currentWord: '',
    currentIndex: 0,
    currentCharacterIndex: 0,
    words: [],
    wordsRemaining: [],
    wordsComplete: [],
    snippet: '',
    isOver: true,
    isStarted: false,
    wordsErrorList: [],
    wordsCorrectList: [],
};

const getRandomSnippet = () => {
    const snippets = [
        `Rainbow Basket Castle Circle Dragon Guitar Jacket Keyhole Laptop Magnet Orange Pencil Rocket Sunset Travel Window Banana Camera Diamond Engine Forest 
Guitar Hammer Insect Joker Lizard Monkey Orange Planet Rabbit Shadow Ticket Umbrella Wallet Anchor Bottle Camera Dragon Feather Garden Helmet Insect Jacket 
Lizard Mirror Panda Rainbow Saddle Turtle Unicorn Basket Castle Diamond Engine Garden Hammer Island Joker Lizard Ninja Penguin Quiver 
Rocket Saddle Turtle Unicorn Volleyball Anchor Bubble Dragon Forest Helmet Island Jacket Lantern Monkey Octopus Planet Rainbow Snorkel Turtle Universe 
Volleyball Zebra Bumblebee Castle Diamond Elephant Forest Grizzly Island Jaguar Lantern Mirror Octopus Parrot Rocket Spider Turtle Volcano Zipline 
amidst the bustling city a quiet cafe offers solace where patrons sip coffee and share tales of love loss and dreams the aroma of freshly baked bread 
mingles with the scent of roses from a nearby florist outside children laugh as they chase butterflies in the park their innocence a beacon of 
hope in a world of chaos meanwhile artists sketch scenes of everyday life capturing moments of beauty and truth across the street a bookstore invites exploration 
its shelves adorned with stories of adventure mystery and romancein this vibrant tapestry of humanity each word holds significance weaving together the fabric of our shared existence 
the sun shines brightly as people gather in the park chatting and laughing with friends and family dogs wag their tails happily chasing after balls and sticks thrown by their owners 
picnic blankets are spread out on the grass laden with sandwiches fruits and snacks children play tag and their giggles filling the air with joy nearby a group of musicians 
plays cheerful tunes adding to the lively atmosphere parents push strollers while toddlers squeal with delight on the playground swings couples stroll hand in hand along the winding 
paths enjoying the peaceful surroundings birds chirp merrily in the trees serenading the crowd with their sweet melodies as the day wears on the sky turns orange and pink signaling 
the approaching sunset reluctantly people begin to pack up their belongings bidding farewell to another wonderful day in the park`
    ];
    return snippets[Math.floor(Math.random() * snippets.length)];
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        generateSentence: (state) => {
            const shuffled = getRandomSnippet().toLowerCase().split(' ').map((word) => word.trim()).filter((word) => word.trim().length > 0 && word.trim() !== '').sort(() => Math.random() - 0.5);
            console.log(shuffled.length);
            state.words = shuffled.slice(0, 30);
            state.snippet = state.words.join(' ');
        },
        setCurrentInput: (state, action: PayloadAction<string>) => {
            state.currentInput = action.payload;
        },
        setCurrentWord: (state, action: PayloadAction<string>) => {
            state.currentWord = action.payload;
        },
        setCurrentIndex: (state, action: PayloadAction<number>) => {
            state.currentIndex = action.payload;
        },
        setCharacterIndex: (state, action: PayloadAction<number>) => {
            state.currentCharacterIndex = action.payload;
        },
        setWords: (state, action: PayloadAction<string[]>) => {
            state.words = action.payload;
        },
        setWordsRemaining: (state, action: PayloadAction<string[]>) => {
            state.wordsRemaining = action.payload;
        },
        setWordsComplete: (state, action: PayloadAction<string[]>) => {
            state.wordsComplete = action.payload;
        },
        setIsOver: (state, action: PayloadAction<boolean>) => {
            state.isOver = action.payload;
        },
        setIsStarted: (state, action: PayloadAction<boolean>) => {
            state.isStarted = action.payload;
            state.isOver = !action.payload;
        },
        resetState: (state) => {
            return {...initialState, words: state.words, snippet: state.snippet};
        },
        nextWord: (state) => {
            if (state.currentIndex < state.words.length - 1) {
                state.currentIndex += 1;
                state.currentCharacterIndex = 0;
            } else {
                
                const shuffled = getRandomSnippet().toLowerCase().split(' ').map((word) => word.trim()).filter((word) => word.trim().length > 0 && word.trim() !== '').sort(() => Math.random() - 0.5);
                const words = shuffled.slice(0, 30);
                const snippet = state.words.join(' ');
                return {...initialState, words: words, snippet: snippet};
            }
        },
        nextCharacter: (state) => {
            if (state.currentCharacterIndex < state.words[state.currentIndex].length) {
                state.currentCharacterIndex += 1;
            }
        },
        addWordError: (state, action: PayloadAction<string>) => {
            state.wordsErrorList.push(action.payload);
        },
        addWrodCorrect: (state, action: PayloadAction<string>) => {
            state.wordsCorrectList.push(action.payload);
        },
    },
});

export const { 
    generateSentence, 
    setCurrentInput, 
    setCurrentWord, 
    setCurrentIndex, 
    setWords, 
    setWordsRemaining, 
    setWordsComplete, 
    setIsOver, 
    setIsStarted,
    resetState,
    nextWord,
    nextCharacter,
    addWordError,
    addWrodCorrect,
} = gameSlice.actions;

export default gameSlice.reducer;