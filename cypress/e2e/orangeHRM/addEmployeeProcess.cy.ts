import PIMPage from "../../support/pageObjects/mainPages/PIMPage";
import addEmployeePage from "../../support/pageObjects/mainPages/AddEmployeePage";
import editEmployeeNavigation from "../../support/pageObjects/subPages/EditEmployeeNavigation";
import employeeDetails_Job from "../../support/pageObjects/EmployeeDetails_Job";
import employeeDetails_Personal from "../../support/pageObjects/EmployeeDetails_Personal";
import employeeDetails_ReportTo from "../../support/pageObjects/EmployeeDetails_ReportTo";
import loginPage from "../../support/pageObjects/mainPages/LoginPage";
import sidebar from "../../support/pageObjects/subPages/Sidebar";
import table from "../../support/pageObjects/objects/table";

const mySideBar: sidebar = new sidebar();
const myLoginPage = new loginPage();
const myPIMPAge: PIMPage = new PIMPage();
const myAddEmployeePage: addEmployeePage = new addEmployeePage();
const myEmployeeDetails_Personal: employeeDetails_Personal = new employeeDetails_Personal();
const myEmployeeDetails_Job: employeeDetails_Job = new employeeDetails_Job();
const myEmployeeDetails_ReportTo: employeeDetails_ReportTo = new employeeDetails_ReportTo();
const myEditEmployeeNavigation: editEmployeeNavigation = new editEmployeeNavigation();
const myTable: table = new table();
describe('add Employee process', () => {
    beforeEach(() => {
        // visiting orangeHRM website
        cy.visit("/");
        
        // login
        myLoginPage.login("Admin", "admin123");

        // declaring a fixture
        cy.fixture('employeeInfo').as('empInfo');
    });

    it('add employee', () => {
        // getting employee info from the fixture then complete
        cy.get('@empInfo').then((infoData: any) => {

            // going to add new employee page
            mySideBar.getPage('PIM').click();
            myPIMPAge.elements.addBTN().click();

            // adding new employee using UI
            myAddEmployeePage.addWithLogin(infoData.firstName, infoData.middleName, infoData.lastName, infoData.userName, infoData.password);
            cy.wait(10000);        
        })
    })

    
})