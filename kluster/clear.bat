echo Eliminando servicios
kubectl delete -n juan-namespace service postgres-service

echo Eliminando deployment
kubectl delete -n juan-namespace deployment postgres-deployment

echo Eliminando reclamos de volumen
kubectl delete -n juan-namespace persistentvolumeclaim pvc-postgres

echo Eliminando MAPS
kubectl delete -n juan-namespace configmap postgres-configmap

echo Eliminando volumenpersistente
kubectl delete persistentvolume pv-postgres-vol1

echo Eliminando storageclass
kubectl delete storageclass postgres
