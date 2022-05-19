# stanilas's code
include ../.env
export $(shell sed 's/=.*//' ../.env)

clean:

build:
	@docker image rm --force $(HUB_URL)/$(APP_NAME_FRONTEND):$(APP_VERSION) || true
	@docker build -t ${HUB_URL}/$(APP_NAME_FRONTEND):$(APP_VERSION) --build-arg VERSION=$(IMAGE_VERSION) .

publish:
	@docker login ${HUB_URL} -u ${DOCKER_EMAIL} -p ${DOCKER_PASS}
	@docker push ${HUB_URL}/$(APP_NAME_FRONTEND):$(APP_VERSION)

