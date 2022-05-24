# Movie Recommender 
The details are as follow:  
Code Language:   Python  
frontend:        HTML/CSS/JavaScript  
Framework:       Flask  

The Recommender System works on the principle of content based filtering.  
# Content Based Filtering  
Content-based filtering uses item features to recommend other items similar to what the user likes, based on their previous actions or explicit feedback.
The X-Factor is it does sentiment Analysis based on the reviews given by users.

![content-based](https://user-images.githubusercontent.com/96643427/169271041-21e0391d-f48e-4c08-9d99-d58cac5046a4.png)  
The details related to the movies are taken from TMDB API. Webscrapping is done with the help of IMDB id movie API to get the users review. BeautifulSoup4 package is used to pull the data out of HTML and XMl documents.  
# How to Run?  
1. Clone the repository.  
2. Install all the required packages and modules as mention in the "requirements file" by opening cmd in the directory and write " pip install -r requirments.txt".  
3. Now write " python main.py" to run the project.
4. Copy the link that comes in the end to the browser address bar.
5. End.  
# Multinomial Baye's Theorem  
Classification and analysis of data which was divided into training and testing data in the ratio of 4:1.
# Similarity Score  
Similarity scoring [0,1] is equivalent to seeking out points in the multidimensional space that are near enough to each other to potentially represent the same true location. It is being done using cosine similarity.    
# Cosine Similarity  
Cosine similarity is used to find similarities between the two documents. It does this by calculating the similarity score between the vectors, which is done by finding the angles between them.  
![cosine](https://user-images.githubusercontent.com/96643427/169275839-d9007427-5d50-477d-b1ec-57716efc8c9a.png)

