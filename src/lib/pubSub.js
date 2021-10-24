const TOPICS = {};

const subscribe = (topic, fn) => {
    if (!TOPICS[topic]) {
        TOPICS[topic] = [];
    }

    TOPICS[topic].push(fn);
};

const publish = (topic, args) => {
    const targetTopic = TOPICS[topic];

    if (!targetTopic) return false;

    targetTopic.forEach(topicFn => topicFn(args));

    return true;
};

export {
    publish,
    subscribe
}