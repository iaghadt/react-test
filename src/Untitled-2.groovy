{

    "id": 1,

    "main": [

        {

            "colors": {

                "backgroundColor": "#f5f5f5"

            },

            "items": {

                "button1": {

                    "action": {

                        "id": "0",

                        "steps": [

                            {

                                "backButton": null,

                                "description": "Please fill the form below to register an employee",

                                "footer": "<i>If you need any help please email us</i>",

                                "header": "",

                                "id": 10,

                                "items": [

                                    {

                                        "code": "100",

                                        "description": "",

                                        "form": {

                                            "groups": [

                                                {

                                                    "description": "",

                                                    "fields": [

                                                        {

                                                            "dateType": "1",

                                                            "description": "This field should be hidden",

                                                            "format": "",

                                                            "hidden": true,

                                                            "maxDate": null,

                                                            "minDate": null,

                                                            "name": "dateCompleted",

                                                            "readOnly": false,

                                                            "required": false,

                                                            "time": false,

                                                            "title": "Date completed",

                                                            "type": "4",

                                                            "value": ""

                                                        },

                                                        {

                                                            "description": "",

                                                            "hidden": false,

                                                            "maxLength": 20,

                                                            "minLength": 3,

                                                            "name": "firstname",

                                                            "placeholder": "George",

                                                            "readOnly": false,

                                                            "required": true,

                                                            "title": "Firstname",

                                                            "type": "1",

                                                            "value": ""

                                                        },

                                                        {

                                                            "description": "",

                                                            "hidden": false,

                                                            "maxLength": 20,

                                                            "minLength": 3,

                                                            "name": "lastname",

                                                            "placeholder": "Papadopoulos",

                                                            "readOnly": false,

                                                            "required": true,

                                                            "title": "Lastname",

                                                            "type": "1",

                                                            "value": ""

                                                        },

                                                        {

                                                            "description": "",

                                                            "name": "jobTitle",

                                                            "readOnly": false,

                                                            "required": true,

                                                            "title": "Job title",

                                                            "type": "3",

                                                            "value": "",

                                                            "values": [

                                                                {

                                                                    "key": "lead",

                                                                    "value": "Team lead"

                                                                },

                                                                {

                                                                    "key": "dev",

                                                                    "value": "Software engineer"

                                                                },

                                                                {

                                                                    "key": "qa",

                                                                    "value": "Tester"

                                                                }

                                                            ]

                                                        },

                                                        {

                                                            "dateType": "6",

                                                            "description": "",

                                                            "format": "dd MMM yyyy",

                                                            "maxDate": "2004-12-31T00:00:00+03:00",

                                                            "minDate": null,

                                                            "name": "birthday",

                                                            "readOnly": false,

                                                            "required": false,

                                                            "time": false,

                                                            "title": "Birthday",

                                                            "type": "4",

                                                            "value": ""

                                                        },

                                                        {

                                                            "calculated": false,

                                                            "description": "",

                                                            "maxValue": 8000,

                                                            "minValue": 800,

                                                            "name": "monthlySalary",

                                                            "readOnly": false,

                                                            "required": true,

                                                            "round": false,

                                                            "title": "Monthly salary",

                                                            "type": "5",

                                                            "value": ""

                                                        },

                                                        {

                                                            "calculated": true,

                                                            "description": "",

                                                            "maxValue": 60000,

                                                            "minValue": 0,

                                                            "name": "annualSalary",

                                                            "readOnly": true,

                                                            "required": false,

                                                            "round": false,

                                                            "title": "Annual salary",

                                                            "type": "5",

                                                            "value": "{{ 100.monthlySalary }} * 12"

                                                        },

                                                        {

                                                            "description": "",

                                                            "name": "referred",

                                                            "readOnly": false,

                                                            "required": false,

                                                            "title": "Referred?",

                                                            "type": "2",

                                                            "value": ""

                                                        },

                                                        {

                                                            "description": "Fill anything else you want us to know",

                                                            "hidden": false,

                                                            "maxLength": 10000000,

                                                            "minLength": 0,

                                                            "name": "notes",

                                                            "placeholder": null,

                                                            "readOnly": false,

                                                            "required": false,

                                                            "title": "Notes",

                                                            "type": "1",

                                                            "value": ""

                                                        }

                                                    ],

                                                    "title": ""

                                                }

                                            ]

                                        },

                                        "formId": "TestForm",

                                        "title": "",

                                        "type": "form"

                                    }

                                ],

                                "nextButton": {

                                    "action": {

                                        "transitions": [

                                            {

                                                "condition": null,

                                                "priority": 0,

                                                "to": 20

                                            }

                                        ],

                                        "type": "submit"

                                    },

                                    "title": "Submit",

                                    "type": "button"

                                },

                                "title": "Register a new employee"

                            },

                            {

                                "backButton": null,

                                "description": "Your form has been submitted successfully!",

                                "footer": null,

                                "header": null,

                                "id": 20,

                                "items": [

                                    {

                                        "body": "<p>{{ 100.firstname }} {{ 100.lastname }} has been added!</p>",

                                        "description": "",

                                        "title": "",

                                        "type": "html"

                                    }

                                ],

                                "nextButton": null,

                                "title": "Thank you!"

                            }

                        ]

                    },

                    "title": "Fill now",

                    "type": "button"

                },

                "description": "Fill a form to register a new employee",

                "title": "Employee registration form"

            },

            "layoutId": 1,

            "order": 8

        }

    ],

    "pageDesc": "",

    "pageTitle": "Hi,",

    "side": [

        {

            "colors": {

                "backgroundColor": "#f5f5f5"

            },

            "items": {

                "description": "<p><b>London</b><br/>4 Felstead Gardens Cubitt Town<br/>E14 3BS London, UK<br/>Tel: +44 2 081237407</p><p><b>Athens</b><br/>1 Estias Str. & 73-75 Mesogion Av,<br/>115 26, Athens, Greece<br/>Tel: +30 210 7450300</p>",

                "title": "EXUS offices"

            },

            "layoutId": 100,

            "order": 1

        }

    ]

}
