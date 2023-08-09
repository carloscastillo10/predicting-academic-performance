FROM python:3.10-slim

ENV FLASK_APP app/runner/run.py
ENV PIP_ROOT_USER_ACTION ignore

COPY . ./

RUN python -m pip install --upgrade pip
RUN python -m pip install -r requirements.txt

EXPOSE 8080
ENV PORT 8080
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 app.run:app