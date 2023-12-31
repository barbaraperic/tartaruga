import dayjs from "dayjs";

export type EvaluationType = 0 | 1 | 2;

interface PreviousType {
	interval: number;
	efactor: number;
	nextReview: string;
}

export default function spacedRepetitionFn(
	previous: PreviousType,
	evaluation: EvaluationType
) {
	const today = dayjs();

	console.log("here", Date.parse(today.add(1, "day").format("YYYY-MM-DD")));

	switch (evaluation) {
		case 0:
			return {
				efactor: 1,
				nextReview: today.add(1, "day").format("YYYY-MM-DD"),
			};
		case 1:
			return {
				efactor: 1.5,
				nextReview: today.add(2, "day").format("YYYY-MM-DD"),
			};
		case 2:
			return {
				efactor: previous.efactor === 1 ? 1.5 : 2.5,
				nextReview: today.add(3, "day").format("YYYY-MM-DD"),
			};
		default: {
			return {
				efactor: previous.efactor,
				nextReview: previous.nextReview,
			};
		}
	}
}

// RETURN
// {
//   n: how many times the card was reviewed successfully in a row, gets incremented by 1
//   efactor: hardest 1.3, easiest: 2.5 (default)
//   interval: when to review the card again, number of days, 0.1 will be in 24h, 0.7 in a week etc
//   data: optional
// }
// PARAMETERS
// previous - the last known state of the model for the given card
// evaluation - represents the information for the current review,
// 1. SCORE - how well the card was recalled during the review, 5 - you easily recalled, 3 - recalled but it was difficult, < 3 - failure to remember (2 - I could not remember, but it sparked my memory when you showed me the answer, 1- I could not remember, and when you showed the answer it was foreign)
// 2. LATENESS - how late this review is. If a review is scheduled for Wed, and you review on Thursday, the number will be 1. If you review 2h later, it would be 0.083 (2h * 1 days / 24h)

// whether you were able to recall the fact or not during a review // easy or hard
// how long it took to remember the fact during a review
// how many times you were able to recall this fact in reviews correctly in a row
// how long the current interval since the last review is
// how late are you in reviewing this material versus when it was scheduled

// 0 - hard, 1 - good, 2 - easy
