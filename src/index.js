'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = "amzn1.ask.skill.7a28c856-5582-4628-ae55-65ebd899c2f5";

const languageStrings = {
    'en-GB': {
        translation: {
            FACTS: [
              'Your gender identity is what gender you think of yourself as. It is an innate sense of self that you then try to describe or categorize based on society.',
              'A persons sex can include things like chromosomes, hormones, genitals, or secondary sex characteristics. Sex is assigned to everyone at birth and doesnt necessarily relate to any identity.',
              'Your gender expression is how you present yourself to the world. For example, it can include the ways in which you dress and talk and act.',
              'Your orientation is who you are attracted to, romantically and or sexually. It describes which gender or genders you might be romatically or sexually attracted to.',
              'There are several different gender neutral pronouns that people can use. One gender neutral pronoun is they. It is used like this: This is Sam, they use they pronouns. You can say sentences like: They like reading. Their book is fun. I like them.',
              'There are several different gender neutral pronouns that people can use. One gender neutral pronoun is ze. It is used like this: This is Sam, ze uses ze pronouns. You can say sentences like: Ze likes reading. Zir book is fun. I like zem.',
              'The word trans is an umbrella term. It can include anyone outside traditional gender expectations. Some people use this as their only gender identity label and dont need to specify further.',
              'A transgender person is someone whose gender identity and assigned sex at birth dont match.',
              'A cisgender person is someone whose gender identity and assigned sex at birth do match.',
              'An intersex person is someone whose sex cant be categorized as male or female.',
              'The word non binary is an umbrella term. It can include anyone with a gender identity other than male or female. Some people use this as their only gender identity label and dont need to specify further.',
              'A genderqueer person is someone who identifies outside the binary and or as some mix of genders.',
              'A person who identifies as neutrois is someone who identifies as a neutral gender.',
              'An agender person is someone who doesnt identify as any gender.',
              'A demigender person is someone who identifies less intensely with a particular gender. It can be thought of as identifying between gendered and genderless. Some people identify as just demigender. Some people identify as a demiboy or a demigirl or as demi non binary.',
              'A genderfluid person is someone whose gender identity changes with time. They might identify as male at one point in time and then female at another or non-binary at another. Some genderfluid peoples genders change over months or years whereas some peoples genders change over days or hours.',
              'A person who identifies as genderflux is someone whose gender intensity changes with time. They might identify as agender at one point in time and then demigender at another or fully gendered at another. Some peoples gender intensity changes over months or years whereas some peoples gender intensity changes over days or hours.'
            ],
            SKILL_NAME: 'My Gender Identity Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a gender identity fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },

    'en-US': {
        translation: {
            FACTS: [
              'Your gender identity is what gender you think of yourself as. It is an innate sense of self that you then try to describe or categorize based on society.',
              'A persons sex can include things like chromosomes, hormones, genitals, or secondary sex characteristics. Sex is assigned to everyone at birth and doesnt necessarily relate to any identity.',
              'Your gender expression is how you present yourself to the world. For example, it can include the ways in which you dress and talk and act.',
              'Your orientation is who you are attracted to, romantically and or sexually. It describes which gender or genders you might be romatically or sexually attracted to.',
              'There are several different gender neutral pronouns that people can use. One gender neutral pronoun is they. It is used like this: This is Sam, they use they pronouns. You can say sentences like: They like reading. Their book is fun. I like them.',
              'There are several different gender neutral pronouns that people can use. One gender neutral pronoun is ze. It is used like this: This is Sam, ze uses ze pronouns. You can say sentences like: Ze likes reading. Zir book is fun. I like zem.',
              'The word trans is an umbrella term. It can include anyone outside traditional gender expectations. Some people use this as their only gender identity label and dont need to specify further.',
              'A transgender person is someone whose gender identity and assigned sex at birth dont match.',
              'A cisgender person is someone whose gender identity and assigned sex at birth do match.',
              'An intersex person is someone whose sex cant be categorized as male or female.',
              'The word non binary is an umbrella term. It can include anyone with a gender identity other than male or female. Some people use this as their only gender identity label and dont need to specify further.',
              'A genderqueer person is someone who identifies outside the binary and or as some mix of genders.',
              'A person who identifies as neutrois is someone who identifies as a neutral gender.',
              'An agender person is someone who doesnt identify as any gender.',
              'A demigender person is someone who identifies less intensely with a particular gender. It can be thought of as identifying between gendered and genderless. Some people identify as just demigender. Some people identify as a demiboy or a demigirl or as demi non binary.',
              'A genderfluid person is someone whose gender identity changes with time. They might identify as male at one point in time and then female at another or non-binary at another. Some genderfluid peoples genders change over months or years whereas some peoples genders change over days or hours.',
              'A person who identifies as genderflux is someone whose gender intensity changes with time. They might identify as agender at one point in time and then demigender at another or fully gendered at another. Some peoples gender intensity changes over months or years whereas some peoples gender intensity changes over days or hours.'
            ],
            SKILL_NAME: 'My Gender Identity Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a gender identity fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    }
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
