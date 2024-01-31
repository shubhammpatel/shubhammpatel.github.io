<script setup lang="ts">
import Toggle from '../components/Toggle.vue';
import Box from './Box.vue';
</script>

<template>
    <Box class="flex flex-col gap-16 py-36" id="education">

        <!-- Education -->
        <div class="flex flex-col gap-9">
            <div class="text-3xl">Education</div>

            <Toggle 
                title="Professional Year"
                link-title="Performance Education, Adelaide"
                link="https://www.performance.edu.au/story"
                date="Feb 2023 - Oct 2023"
            >

            <table class="w-full">
            <tr>
            <td class="w-1/4 align-top"> Key Courses: </td>
            <td> Australian Business Culture, Environment, and Workplace Skills, Professional Business Communication. </td>
            </tr>
            </table>    

            </Toggle>

            <Toggle 
                title="Bachelor of Information Technology (Networking and Cybersecurity)"
                link-title="UniSA, Adelaide"
                link="https://www.unisa.edu.au/about-unisa/"
                date="Feb 2019 - Dec 2022"
            >

            <table class="w-full">
            <tr>
            <td class="w-1/4 align-top"> Key Courses: </td>
            <td> ICT Capstone Project, Cloud, Virtualization and Storage, Digital Forensics, Web Development, Network Architecture, CCNP Enterprise Service, Agile Development and Governance, IT Project Management. </td>
            </tr>
            </table> 

            <br />

            <table class="w-full">
            <tr>
            <td class="w-1/4 align-top"> Key Electives: </td>
            <td>  World History Trends and Transformations, Business Resilience, Security Governance. </td>
            </tr>
            </table> 

            <br />

            <table class="w-full">
            <tr>
            <td class="w-1/4 align-top"> Achievements: </td>
            <td> 
             <ul class="list-disc list-inside">
              <li> Distinction average achieved overall. </li>
              <li> International Merit Scholarship. </li>
             </ul>
            </td>
            </tr>
            </table> 

            </Toggle>

            <Toggle 
                title="High School"
                link-title="H.B.Kapadia New High School, Ahmedabad"
                link="https://en.wikipedia.org/wiki/H._B._Kapadia_New_High_School"
                date="May 2017 - Mar 2018"
            >

            <table class="w-full">
            <tr>
            <td class="w-1/4 align-top"> Achievements: </td>
            <td> High Distinction achieved. </td>
            </tr>
            </table> 

            </Toggle>
        </div>


        <!-- Projects -->
        <div class="flex flex-col gap-9">
            <div class="text-3xl">Projects</div>

            <Toggle 
                title="Data Security"
                link-title="Moi Sante"
                date="Aug 2022 - Dec 2022"
            >

            <table class="w-full">
            <tr>
            <td class="w-1/4 align-top"> Objective: </td>
            <td> This project aimed to establish Moi Sante’s brand, allowing the supplier to concentrate on providing services rather than wasting time on administrative tasks and to provide real-time. </td>
            </tr>
            </table> 

            <br />

            <table class="w-full">
            <tr>
            <td class="w-1/4 align-top"> Skills: </td>
            <td> Data Security, Integrity and Ethics, Security Auditing and Compliance, Firewall Management, Cybersecurity Analysis. </td>
            </tr>
            </table> 
            
            <br />

            <table class="w-full">
            <tr>
            <td class="w-1/4 align-top"> Duties: </td>
            <td> To accomplish this, strategies such as giving the users the ability to rate, refer and give feedback on the application were put in place to encourage user interaction and therefore improve their brand. Moi Sante’s requirements and problems were addressed using appropriate technical security methods and the consideration of business security. A proposed network included firewalls and attack mitigations while the company and staff were provided with training and security awareness. </td>
            </tr>
            </table> 

            </Toggle>

            <Toggle 
                title="Course Evaluation"
                link-title="Palo Alto"
                date="Jul 2021 - Dec 2021"
            >

            <table class="w-full">
            <tr>
            <td class="w-1/4 align-top"> Objective: </td>
            <td> Collaborated in a team of 4 to complete the project successfully. Compare the benefits of using Palo Alto Networking Academy with the existing CISCO Networking Academy. </td>
            </tr>
            </table> 

            <br />

            <table class="w-full">
            <tr>
            <td class="w-1/4 align-top"> Skills: </td>
            <td> Continuous Learning, Attention to Detail, Leadership, Time Management, Teamwork. </td>
            </tr>
            </table> 
            
            <br />

            <table class="w-full">
            <tr>
            <td class="w-1/4 align-top"> Duties: </td>
            <td> I Investigated and completed one stream of the Palo Alto enterprise security certification through the Palo Alto Academy. Evaluated resources, labs, support, quizzes, and exams available to students and lecturers. Presented findings through a comprehensive presentation and detailed report. Explored content, supporting resources, support systems, costs, ease of implementation, and benefits to the University. </td>
            </tr>
            </table> 

            </Toggle>
        </div>
    </Box>
</template>