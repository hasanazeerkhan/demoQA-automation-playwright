export const textBox = {
    elements: {
        tab: `//div[@class = 'header-text'][contains(text(), 'Elements')]`,
        cardElements: `//div[@class='card-body']/h5[contains(text(), 'Elements')]`,
        textBoxButton: `//li[@class='btn btn-light ']//span[contains(text(), 'Text Box')]`,
        firstName: '#userName',
        email: '#userEmail',
        currentAddress: '#currentAddress',
        permanentAddress: '#permanentAddress',
        submit: '#submit'
    },
    textBoxInput: ['My test name', 'test@example.com', 'My current address', 'My Permanent address'],
    textBoxOutput: [`//p[@id='name']`, `//p[@id='email']`, `//p[@id='currentAddress']`, `//p[@id='permanentAddress']`],

}

export const checkBox = {}

export const radioButton = {
    elements: {
        radioButtonTab: `//li[@class='btn btn-light ']//span[contains(text(), 'Radio Button')]`,
        input: ['#yesRadio', '#impressiveRadio', '#noRadio'],
        verification: [`//span[@class='text-success' and contains(text(), 'Yes')]`, `//span[@class='text-success' and contains(text(), 'Impressive')]`]
    }
}

export const variousClicks = {
    tab: `//li[@class='btn btn-light ']//span[contains(text(), 'Buttons')]`,
    doubleClick: '#doubleClickBtn',
    rightClick: `#rightClickBtn`,
    singleClick: `//div[@class='mt-4']//button[text() ='Click Me']`,
    message: {
        doubleClick: `//p[text() ='You have done a double click' ]`,
        rightClick: `//p[text() ='You have done a right click' ]`,
        singleClick: `//p[text() ='You have done a dynamic click' ]`
    }
}

export const linkAndStatus = {

    tab: `//li[@class='btn btn-light ']//span[contains(text(), 'Links')]`,
    newTabUrl: ['#simpleLink', '#dynamicLink'],
    apiCalls:
        [
            ['Created', 201, 'Created'],
            ['No Content', 201, 'No Content'],
            ['Moved', 301, 'Moved Permanently'],
            ['Bad Request', 400, 'Bad Request'],
            ['Unauthorized', 401, 'Unauthorized'],
            ['Forbidden', 403, 'Forbidden'],
            ['Not Found', 404, 'Not Found']
        ],

    verification: {
        responded: `//p[@id = 'linkResponse' and text() = 'Link has responded with staus ']`,
        //p[@id = 'linkResponse']//b[text() = '404']
        statusText: `//p[@id = 'linkResponse' and text() = ' and status text ']`,

    }

}

//span[@class = 'rct-title' and text() = 'Home']/following-sibling::span[@class = 'rct-checkbox']