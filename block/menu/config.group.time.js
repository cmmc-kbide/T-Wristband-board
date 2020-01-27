module.exports = {
    override: true,
    name: "Time",
    index: 80,
    color: "230",
    icon: "/static/icons/icons8_Story_Time_96px.png",
    blocks: [
        {
            xml: `<sep gap="32"></sep><label text="Delay" web-class="headline"></label>`
        },
        {
            xml:
                `<block type="time_delay">
            <value name="delay">
                <shadow type="math_number">
                    <field name="NUM">1000</field>
                </shadow>
            </value>
        </block>`
        },
        {
            xml:
                `<block type="time_delay_microsec">
            <value name="delay">
                <shadow type="math_number">
                    <field name="NUM">1000</field>
                </shadow>
            </value>
        </block>`
        },
        {
            xml: `<sep gap="32"></sep><label text="Timestamp" web-class="headline"></label>`
        },
        "time_millis",
        "time_micros"
    ]
};
