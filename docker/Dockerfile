FROM python:3.10-alpine

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

ENV APP_HOSTNAME="0.0.0.0"
ENV APP_PORT="8080"

CMD ["python", "app.py"]
