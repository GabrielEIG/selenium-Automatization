import { expect } from 'chai';

import { LoginFail, LoginSuccess } from "../tests/login.js";
import { MyEvents } from "../tests/myEvents.js";
import { MyNotifications } from "../tests/myNotifications.js";
import { MyRed } from "../tests/myRed.js";
import { MyRequests } from "../tests/myRequests.js";

describe("test selenium", function(){

    it("Login Success", async function() {
        const result = await LoginSuccess();
        expect(result).to.be.true; 
    });

    it("Login Fail", async function() {
        const result = await LoginFail();
        expect(result).to.be.true;
    });
    
    it("My Events", async function() {
        const result = await MyEvents();
        expect(result).to.be.true;
    });

    it("My Notifications", async function() {
        const result = await MyNotifications();
        expect(result).to.be.true;
    });
    
    it("My Red", async function() {
        const result = await MyRed();
        expect(result).to.be.true;
    });

    it("My Requests", async function() {
        const result = await MyRequests();
        expect(result).to.be.true;
    });
    
})


  