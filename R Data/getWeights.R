library(caret)
print('Calculando Pesos Variables Significativas')
training <- read.csv("training.csv", sep = ";")
testing <- read.csv("testing.csv", sep = ";")
#CONFIGURANDO EL MODELADO DEL PROBLEMA ----------------------
trainCtrl <- trainControl(method="cv",10,verboseIter = FALSE )
#MONTANDO EL MODELO -----------------------------------------
modFit <-train(package_delivery_status ~ .,data=training,method="rf",trControl=trainCtrl, importance = TRUE)
#REALIZANDO PREDICCION CON RANDOM FORESTS--------------------
pred <-predict(modFit,testing)
#EVALUANDO LA PREDICCION.------------------------------------
print('IMPORTANCIA VARIABLES')
print(varImp(modFit))	
