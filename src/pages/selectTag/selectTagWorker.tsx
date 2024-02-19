import topics from '../../components/datadummy/topicsworker';
import topicsSecond from '../../components/datadummy/topicsworker2';
import useTopicSelection from '../../hooks/useTopicSelection';
import { Link } from 'react-router-dom';

const SelectTag = () => {
    const { selectedTopics, selectedTopicsSecond, toggleTopic } = useTopicSelection();

    return (
        <>
            <div className="max-w-auto max-h-auto mx-auto relative">
                {/* form */}
                <div className="h-[600px] w-[90%] mx-auto flex flex-col items-center justify-center gap-10 text-[#5A5A5D]">
                    <h2 className="text-3xl font-medium text-black">
                        Pick 5 topics you're interested in
                    </h2>
                    <form className="flex flex-col text-center w-[40%]">
                        <div className="grid grid-cols-5 gap-4">
                            {topics.map((topic, index) => (
                                <button
                                    key={index}
                                    type='button'
                                    className={`p-2 rounded-md border-2 ${selectedTopics.includes(topic) ? 'bg-gray-300' : 'hover:bg-gray-400'}`}
                                    onClick={() => toggleTopic(topic, 1)}
                                >
                                    {topic}
                                </button>
                            ))}
                        </div>
                    </form>
                    <form className="flex flex-col text-center w-[40%]">
                        <div className="grid grid-cols-5 gap-4">
                            {topicsSecond.map((topic, index) => (
                                <button
                                    key={index}
                                    type='button'
                                    className={`p-2 rounded-md border-2 ${selectedTopicsSecond.includes(topic) ? 'bg-gray-300' : 'hover:bg-gray-400'}`}
                                    onClick={() => toggleTopic(topic, 2)}
                                >
                                    {topic}
                                </button>
                            ))}
                        </div>
                    </form>
                    <div className="flex flex-col">
                        <button
                            type="button"
                            className="bg-[#007DFA] w-[300px] text-white text-center font-medium p-3 rounded-md hover:bg-[#3390ed]"
                        >
                            <Link to='/home'>
                                Register
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelectTag;
