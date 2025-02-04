# Heart-Disease-Predictor
The project consists of:
- Heart Disease Prediction System is developed using Artificial Neural Network (ANN) algorithm for predicting the risk level of heart disease. The system uses 13 medical 
  parameters such as age, sex, blood pressure, cholesterol, and obesity for prediction. The heart disease prediction system predicts the likelihood of patients getting heart disease.
- A Flask web application that provides a interactive interface for user input.
- Data analysis and visualizations created with Python libraries (Pandas, NumPy, Seaborn, Matplotlib) to uncover insights from the dataset.

The original data came from the cleaveland data from the UCI Machine Learning Repository. https://archive.ics.uci.edu/ml/datasets/heart+Disease

Data analysis:
In the file data_analysis.ipynb I analyzed the data from the dataset heart.csv using Pandas, Seaborn, Matplotlib 
  - Detailed exploratory data analysis using Jupyter Notebook.
  - Visualizations include histograms, count plots, correlation heatmaps, box plots, and pairplots.
  - I did this to find trends and corrlelations to make my model more efficient.

Model Deployment:  
  - A trained Keras model heart_model.keras and scaler scaler.pkl are used for predictions.
  - This model uses a ANN algorithm which is an essential tool in deep learning.

How the application works:
The user inputs there data based on the questions asked. Once finished the user clicks the "predict" button and the machine learning model predicts if you have heart disease using artifical nerual networks (ANN). 

Here is what the starting page looks like:
<img width="1000" alt="Screenshot 2025-02-04 at 3 21 51 PM" src="https://github.com/user-attachments/assets/0ba017a2-f067-482d-82b0-d49fe0e6e0ba" />

Here is what is looks like once you are finished answering the questions:
<img width="1000" alt="Screenshot 2025-02-04 at 3 22 54 PM" src="https://github.com/user-attachments/assets/7a49d991-e854-4e10-9974-9758463d7a0c" />
