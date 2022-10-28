FROM whatscookin-composedb:latest

WORKDIR /usr/scripts

ENV CERAMIC_ENABLE_EXPERIMENTAL_COMPOSE_DB=true

COPY admin-did-script.js ./

EXPOSE 7007

CMD node admin-did-script.js && npx --yes @ceramicnetwork/cli@2.11 daemon