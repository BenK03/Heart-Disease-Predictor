from flask import Flask, render_template, request
import numpy as np
import joblib
from tensorflow.keras.models import load_model

app = Flask(__name__)

# Load your trained model and scaler
model = load_model('heart_model.keras')
scaler = joblib.load('scaler.pkl')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        features = [
            float(request.form.get('age')),
            float(request.form.get('sex')),
            float(request.form.get('cp')),
            float(request.form.get('trestbps')),
            float(request.form.get('chol')),
            float(request.form.get('fbs')),
            float(request.form.get('restecg')),
            float(request.form.get('thalach')),
            float(request.form.get('exang')),
            float(request.form.get('oldpeak')),
            float(request.form.get('slope')),
            float(request.form.get('ca')),
            float(request.form.get('thal'))
        ]
    except Exception as e:
        return render_template('index.html', prediction_text="Invalid input. Please ensure all values are numeric.")

    final_features = np.array(features).reshape(1, -1)
    final_features_scaled = scaler.transform(final_features)
    prediction = model.predict(final_features_scaled)
    output = int(prediction[0][0] > 0.5)
    result_text = "Based on the inputs, it is likely that you have heart disease." if output == 1 \
                  else "Based on the inputs, it is unlikely that you have heart disease."
    return render_template('index.html', prediction_text=result_text)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
