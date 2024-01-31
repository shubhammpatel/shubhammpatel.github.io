<script setup lang="ts">
import Toggle from '../components/Toggle.vue';
import Box from './Box.vue';
</script>

<template>
    <Box class="flex flex-col gap-16 py-36" id="experience">

        <!-- Experience -->
        <div class="flex flex-col gap-9">
            <div class="text-3xl">Experience</div>

            <Toggle 
                title="Web Developer"
                link-title="eBottli Pty. Ltd., Adelaide"
                link="https://ebottli.com/"
                date="Oct 2023 - Present"
            >
            
            <table class="w-full">
            <tr>
            <td class="w-1/4 align-top"> Key Responsibilities: </td>
            <td> 
            </td>
            </tr>
            </table>   
            <br/>
            <ul class="list-disc list-outside">
              <li> <b> Mobile Interface Development: </b> Led the development of the mobile interface on Android, enhancing client accessibility and engagement. Employed Android development tools and technologies to create a client-friendly and responsive application. </li>
              <br/>
              <li> <b> Web Interface Integration: </b> Successfully integrated the web interface with AWS and Angular, fostering a cohesive client experience. Leveraged AWS services for scalability and Angular for dynamic front-end design. </li>
              <br/>
              <li> <b> Database Integration: </b> Worked closely with Firebase database, incorporating new features and functionalities for websites, enriching client interactions and data-driven decision-making.</li>
              <br/>
              <li> <b> Bug Fixing and Optimization: </b> Proactively identified and resolved existing bugs in web applications, optimizing website performance and ensuring a smooth client experience.</li>
              <br/>
              <li> <b> Usability Audits and Efficiency Enhancement: </b> Regularly audited the website for usability, promptly addressing issues, and enhancing efficiency. Ensured that our web applications evolved to meet changing client needs.</li>
             </ul>              
            </Toggle>

            <Toggle 
                title="Customer Service Representative"
                link-title="TSA Group, Adelaide"
                link="https://tsagroup.com.au/about/"
                date="Feb 2023 - Oct 2023"
            >

            <table class="w-full">
            <tr>
            <td class="w-1/4 align-top"> Key Responsibilities: </td>
            <td> 
            </td>
            </tr>
            </table>   
            <br/>
            <ul class="list-disc list-outside">
            <li> Efficiently provided customer service via calls, addressing diverse inquiries and concerns for clients.</li>
            <li> Acquired proficiency in resolving complaints, addressing objections, and scheduling appointments.</li>
            <li> Assisted Priority Assist Customers, ensuring uninterrupted service for vulnerable individuals and delivering exceptional support across Telstra's offerings.</li>
            <li> Managed service orders, upgrades, cancellations, and account changes accurately and efficiently, while providing technical assistance for device setup, troubleshooting, and optimization.</li>
            </ul>

            <br/>

            <table class="w-full">
            <tr>
            <td class="w-1/4 align-top"> Achievements: </td>
            <td> 
             <ul class=" list-inside">
              <li> <b> Brightest Team Member Jun 2023 </b> </li>
              Brightest team member in the academy and stood by this in the production space too. Wonderful growth especially because learnt process on own and made good use of resources provided.
             </ul>
            </td>
            </tr>
            </table>

            </Toggle>
        </div>


        <!-- Volunteering -->
        <div class="flex flex-col gap-9">
            <div class="text-3xl">Volunteering</div>

            <Toggle 
                title="Animal Welfare"
                link-title="Farishtey, Ahmedabad"
                date="Mar 2022 - Jul 2022"
            >
            Participated in fundraising activities and events to support the NGO's financial needs and raise awareness of animal welfare issues.
            </Toggle>

            <Toggle 
                title="UniMentor"
                link-title="UniSA, Adelaide"
                date="Jun 2020 - Dec 2020"
            >
            As a UniSA representative and influential student offered a friendly face while providing ongoing support to new students, helping to make the transition to university easier.
            </Toggle>
        </div>
    </Box>
</template>