import random

class Flashcard:
    def __init__(self, question, answer):
        self.question = question
        self.answer = answer

class FlashcardQuiz:
    def __init__(self):
        self.flashcards = []

    def add_flashcard(self, question, answer):
        flashcard = Flashcard(question, answer)
        self.flashcards.append(flashcard)

    def quiz(self):
        if not self.flashcards:
            print("No flashcards available. Please add some first.")
            return

        random.shuffle(self.flashcards)  # Shuffle the flashcards for randomness
        score = 0  # Initialize score

        # Loop through each flashcard and ask the question
        for flashcard in self.flashcards:
            user_answer = input(f"Question: {flashcard.question}\nYour answer: ")
            # Check if the user's answer is correct
            if user_answer.strip().lower() == flashcard.answer.strip().lower():
                print("Correct!\n")
                score += 1  # Increment score for a correct answer
            else:
                print(f"Wrong! The correct answer is: {flashcard.answer}\n")

        # Display the final score after the quiz
        print(f"Your final score: {score}/{len(self.flashcards)}")

def main():
    quiz = FlashcardQuiz()

    while True:
        print("1. Add Flashcard")
        print("2. Start Quiz")
        print("3. Exit")
        choice = input("Choose an option: ")

        if choice == '1':
            question = input("Enter the question: ")
            answer = input("Enter the answer: ")
            quiz.add_flashcard(question, answer)
            print("Flashcard added!\n")
        elif choice == '2':
            quiz.quiz()  # Start the quiz
        elif choice == '3':
            print("Exiting the app. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.\n")

if __name__ == "__main__":
    main()