#include<stdio.h>
#include<stdlib.h>
#include<time.h>




int main(){

    // initialize random number generator.
    srand(time(0));

    //  generate random number between 1 and 100.
    int randomNumber = (rand() % 100) + 1;

    int no_of_guesses = 0;
    int guessed;

    // printf("Random number: %d\n", randomNumber);

    

    do{
        printf("Guess the Number");
        scanf("%d", &guessed);
        if(guessed>randomNumber){
            printf("Lower Number Please!\n");
        }else if(guessed<randomNumber){
            printf("Higher Number Please!\n");
        }else{
            printf(" congrats !! \n");
        }
        no_of_guesses++;
    }while(guessed!=randomNumber);

    printf("you guessed the number in %d guesses", no_of_guesses);


    
    
    return 0;
}