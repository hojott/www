from fastapi import FastAPI

app = FastAPI()

@app.get("/mydata")
def mydata():
    return {"age": 17}