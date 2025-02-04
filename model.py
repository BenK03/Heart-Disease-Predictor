import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Input
from sklearn.metrics import confusion_matrix
import joblib

df = pd.read_csv("heart.csv")
X = df.drop(columns=['target'])
y = df['target']

# Split into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)

# Scale the features
ss = StandardScaler()
X_train = ss.fit_transform(X_train)
X_test = ss.transform(X_test)

# Build the model using an Input layer for the input shape
model = Sequential([
    Input(shape=(13,)),  # Specify the input shape here (13 features)
    Dense(8, activation="relu", kernel_initializer="uniform"),
    Dense(14, activation="relu", kernel_initializer="uniform"),
    Dense(1, activation="sigmoid", kernel_initializer="uniform")
])

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train the model
model.fit(X_train, y_train, batch_size=8, epochs=100)

# # Save model
# model.save('heart_model.keras')
# joblib.dump(ss, 'scaler.pkl')

# Make predictions
predictions = model.predict(X_test)

# Making confusion matrix
y_pred = model.predict(X_test)
y_pred = (y_pred > 0.5)

cm = confusion_matrix(y_test,y_pred)

# Accuracy equation
accuracy = (cm[0][0]+cm[1][1])/(cm[0][1] + cm[1][0] +cm[0][0] +cm[1][1])
print(accuracy*100)