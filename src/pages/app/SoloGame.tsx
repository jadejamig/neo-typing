import { useEffect, useState } from "react";
import Card from "../../components/neo-brutalism/Card";
import { generateSentence, resetState, nextWord, setIsStarted, nextCharacter, addWordError, addWrodCorrect } from "../../store/gameSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Word from "../../components/Word";
import { toast } from 'sonner';

const SoloGame = () => {

  const {isStarted, words, currentIndex, currentCharacterIndex, wordsErrorList, wordsCorrectList} = useAppSelector((state) => state.game);

  const dispatch = useAppDispatch();
  const [input, setInput] = useState('');
  const [seconds, setSeconds] = useState(10);
  const [gameSeconds, setGameSeconds] = useState(0);
  const [accuracy, setAccuracy] = useState('0');
  const [speed, setSpeed] = useState('0');

  useEffect(() => {
    setSeconds(10);
    setGameSeconds(0);
    setAccuracy('0');
    setSpeed('0');
    setInput('');
    dispatch(resetState());
    dispatch(generateSentence());
  }, []);
  
  useEffect(() => {
    function tick() {
      setSeconds((prev) => prev - 1);
    }

    if (isStarted) {
      const countdown = setInterval(tick, 1000);

      if (seconds < 1) {
        clearInterval(countdown);
        toast.error("You were idle for too long. Please try again.", { position: "top-center" });
        setSeconds(10);
        setGameSeconds(0);
        setInput('');
        dispatch(resetState());
      }
      return () => clearInterval(countdown);
    }
  },[isStarted, seconds]);

  useEffect(() => {
    function tick() {
      setGameSeconds((prev) => prev + 1);
    }

    if (isStarted) {
      const countdown = setInterval(tick, 1000);

      if (gameSeconds > 59) {
        clearInterval(countdown);
        setSeconds(10);
        setGameSeconds(0);
        setInput('');
        dispatch(resetState());
      }
      return () => clearInterval(countdown);
    }
  },[isStarted, gameSeconds]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeconds(10);
    if (e.target.value === ' ' && !isStarted) {
      dispatch(setIsStarted(true));
      setSeconds(10);
      setGameSeconds(0);
      setInput('');
    } 
    else if (e.target.value.trim() === input) {
      if (e.target.value.trim() === words[currentIndex]) {
        setInput('');
        if (currentIndex === words.length - 1) {
          toast.success("Wow! You typed all that!", { position: "top-center" });
        }
        dispatch(addWrodCorrect(words[currentIndex]));
        dispatch(nextWord());
      }
    }
    else if (e.target.value.length > words[currentIndex].length) {
      return;
    }
    else if (isStarted) {
      if (checkValidCharacter(e.target.value[e.target.value.length - 1])) {
        setInput(e.target.value);
        dispatch(nextCharacter());
      } else {
        const errorIndex = `${currentIndex}${currentCharacterIndex}`;
        if (wordsErrorList.includes(errorIndex)) {
          return;
        }
        dispatch(addWordError(errorIndex));
      }
    }
  };

  const checkValidCharacter = (char: string) => {
    const word = words[currentIndex].split('');
    if (char === word[currentCharacterIndex]) {
      return true;
    }
    return false
  }

  useEffect(() => {
    setAccuracy(getAccuracy());
    setSpeed(getSpeed());
  }, [gameSeconds]);

  const getAccuracy = () => {
    if (wordsCorrectList.length === 0 || gameSeconds === 0) {
      return '0';
    }
    const charSum = words.reduce((acc, word) => acc + word.length, 0);
    const errorChar = wordsErrorList.length;
    return (100 - (errorChar / charSum) * 100).toFixed(2);
  }

  const getSpeed = () => {
    if (wordsCorrectList.length === 0 || gameSeconds === 0) {
      return '0';
    }
    const speed = (wordsCorrectList.length + 2) / (gameSeconds / 60);
    return speed.toFixed(0);
  }

  return (
    <div className="max-w-2xl w-full flex flex-col items-center justify-center py-20 mt-24 gap-10">
      <Card className='w-full font-work font-heading gap-4 bg-main max-w-2xl flex justify-center items-center text-xl'>
        <p>{`Speed: ${speed} wpm`}</p>
        <p>{`Accuracy: ${accuracy}%`}</p>
      </Card>
      <div className='flex w-full max-w-2xl items-center p-0 min-h-[250px]'>
        <Card className="flex flex-wrap gap-x-4 w-full bg-white bg-[radial-gradient(#cacbce_1px,transparent_1px)] [background-size:16px_16px]">
          {words.map((word, index) => (
            <Word key={index} word={word} index={index} />
          ))}
        </Card>
      </div>
      
      <input
        className="w-full max-w-2xl text-center text-xl rounded-base border-b-2 focus-visible:border-black p-[10px]
                  font-base ring-offset-white focus-visible:outline-none outline-none transition-all border-2 border-black shadow-base"
        type="text"
        name="text"
        placeholder={ !isStarted ? "Press 'space' here to start" : words[currentIndex] }
        value={input}
        onChange={handleChangeInput}
        autoComplete="off"
        autoCorrect="off"
        aria-label="Press 'space' here to start"
      />
      {/* {seconds}
      {isStarted ? " isStarted " : " notStarted "}
      {currentIndex} / {words.length}
      {" charIndex: " + currentCharacterIndex}
      {" GameSeconds: " + gameSeconds}
      {" wordCorrect array: " + wordsCorrectList.length} */}
      {/* {" currentChar: " + words[currentIndex].split('')[currentCharacterIndex]} */}
    </div>
  )
}

export default SoloGame
