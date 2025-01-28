# Crime Data Analysis

Explore the result presented through our visually appealing user interface. Click on the link below.
https://pragatisukhija.github.io/CrimeDataAnalysis/


# Abstract

Crime is a persistent issue affecting communities, with far-reaching implications for public safety and law enforcement agencies. Harnessing the power of spatial computing and big data analytics presents a transformative opportunity to understand and prevent crime more effectively. This project outlines a comprehensive approach to analyze crime data in New York City for the benefit of the public and law enforcement agencies. The primary objective of the project is to employ big data methodologies to analyse crime data in the city of New York and incorporate spatial computing techniques for crime mapping and hotspot analysis.

# Dataset

The datasets used in our Project can be downloaded from the below Google Drive Link :

https://drive.google.com/drive/folders/16UVe5FVQyYJqwLm2qqlxK40hVNhKdAy9

# Setup
To run our code locally, you need to setup a few things. These are : 

 1. **Python 3.12** : You can download Python from https://www.python.org/downloads/ . Once download is finished, start the installer and follow the steps on the screen to install Python on your system.
 2.  **JDK 8** :  You need to have JDK installed to run Hadoop. It is crucial that you download and install JDK version 8 only as any other version may cause issues while running this Project. Download link - [https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html](https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html) -
 3.  **Hadoop** : Download Hadoop from [https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-3.3.6/hadoop-3.3.6-src.tar.gz](https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-3.3.6/hadoop-3.3.6-src.tar.gz)
 After downloading Hadoop, you can refer the documentation to setup Hadoop successfully in your system. (This is a tricky one, please make sure you get this done correctly).
 4.  **NodeJS and NPM** : To run the React UI, you will need to install NodeJS and NPM. Download and setup these from [https://nodejs.org/en/download](https://nodejs.org/en/download)


After setting up the things mentioned above, you can open the code in Jupyter notebook. Here you need to install a few libraries for the code to run properly. Run these commands in the notebook before starting code execution : 

    pip install pyspark
    pip install matplotlib
    pip install hdfs

The code should now be ready to run. 

**Note** : Any error in these setups could cause the code to not run properly.
# Running the Code
The zip file contains 2 main files : 

 1. **CrimeDataAnalysis.ipynb** : This Jupyter notebook has all our scripts, from cleaning up the data to the final step of visualizing it. You can run the code yourself if you want to see how we reached our conclusions, but it's not necessary for checking out the user interface (UI) and the results we’ve presented there.

 2. **UI :** Inside this folder, you'll find the React-based user interface displaying our data analysis. It's got all the visuals from our findings, with static images for most parts and an interactive map for the spatial analysis. If you just want to view the UI, simply open your Command Prompt, go to the 'crimecalapp' directory, and start the app from there. No need to run the notebook for this.

Run below command to start the UI and view the results.
`npm start`

# Author Contribution in Source Code
Although every member was involved in discussions and brainstorming sessions from deciding the project topic to the final implementation, we have categorized the work and divided it into major contributions of each individual.

|Name  |Contribution| 
|--|--|--|
| Aditya Mohan Gupta  | Hadoop, React UI and Data Analysis |
|  Ankit Laxmikant Yadav |Data Cleaning and Preprocessing  |
|Madhura Patil  | Data Analysis and Visualization |
|   Pournima Hemantkumar Shinde |Data Cleaning and Preprocessing  |
|Pragati Mahesh Sukhija  | Spatial Analysis, Hadoop and React UI |
