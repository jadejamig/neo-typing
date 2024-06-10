import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";

const Word = ({ word, index }: { word: string, index: number }) => {

    const [isCurrentWord, setIsCurrentWord] = useState(false);
    const [isWordDone, setIsWordDone] = useState(false);
    const {currentIndex, currentCharacterIndex, wordsErrorList} = useAppSelector((state) => state.game);

    useEffect(() => {
        setIsCurrentWord(index === currentIndex)
        setIsWordDone(index < currentIndex)
    },[index, currentIndex])

    const isError = (charIndex: number) => {
        if (wordsErrorList.includes(`${index}${charIndex}`)) {
            return true;
        }
        return false;
    }

    return (
        <span className={`leading-loose text-2xl select-none`}>
            {word.split('').map((letter, i) => (
                <span 
                    key={i} 
                    className={`
                        ${isCurrentWord && i === currentCharacterIndex ? 'underline' : ''} 
                        ${isError(i) ? 'text-mainAccent' : isWordDone ? 'text-zinc-400' : isCurrentWord && i < currentCharacterIndex ? 'text-zinc-400' : ''}
                        
                    `}
                >
                    {letter}
                </span>
            ))}
        </span>
    )
}

export default Word