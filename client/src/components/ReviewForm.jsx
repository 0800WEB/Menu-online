import ButtonSecondary from './Buttons/ButtonSecondary';
import { useState } from 'react';
import {
    FORM_TITLE,
    NAME_PLACEHOLDER,
    REVIEW_PLACEHOLDER,
    RATING_LABEL,
    SUBMIT_BUTTON_TEXT,
    STAR_FILLED_COLOR,
    STAR_EMPTY_COLOR,
} from '../utils/consts/consts';

const ReviewForm = () => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="h-full flex flex-col items-center justify-between w-full gap-7 mt-7">
            <h2 className="text-xl font-bold">{FORM_TITLE}</h2>
            <form onSubmit={handleSubmit} className="w-full grow">
                <input
                    type="text"
                    placeholder={NAME_PLACEHOLDER}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 mb-5 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                <textarea
                    placeholder={REVIEW_PLACEHOLDER}
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="w-full p-3 mb-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                    rows="4"
                />
                <div className="flex items-center mb-8">
                    <p className="mr-2">{RATING_LABEL}</p>
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                                key={star}
                                xmlns="http://www.w3.org/2000/svg"
                                fill={star <= rating ? "currentColor" : "none"}
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                className={`size-5 cursor-pointer ${star <= rating ? STAR_FILLED_COLOR : STAR_EMPTY_COLOR}`}
                                onClick={() => setRating(star)}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.158 6.62a1 1 0 00.95.69h6.858c.969 0 1.372 1.24.588 1.81l-5.515 4.006a1 1 0 00-.364 1.118l2.158 6.62c.3.921-.755 1.688-1.54 1.118l-5.515-4.006a1 1 0 00-1.176 0l-5.515 4.006c-.785.57-1.839-.197-1.54-1.118l2.158-6.62a1 1 0 00-.364-1.118L2.445 11.05c-.784-.57-.38-1.81.588-1.81h6.858a1 1 0 00.95-.69l2.158-6.62z"
                                />
                            </svg>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center'>
                    <ButtonSecondary textChildren={SUBMIT_BUTTON_TEXT} typeButton={"submit"} />
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;
