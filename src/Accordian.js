import React from "react";
import { Accordion } from '@salesforce/design-system-react';
import { AccordionPanel, Textarea, Input, DataTable, DataTableColumn, Button, Icon, Dropdown } from '@salesforce/design-system-react';
import { IconSettings } from '@salesforce/design-system-react';
//import { Dropdown } from '@salesforce/design-system-react/components/menu-dropdown';


const AccordianExample = () => {
    const items = () => {
        return <div>

        </div>
    }

    const getTable = () => {
        const tableData = [
            {
                id: 3,
                date: '17/05/2023',
                callReceived: '7.04',
                enRoute: '7.05',
                arrivedAtScene: '7.15',
                arrivedAtPatient: '7.16',
                departScene: '7.35',
                atDestination: '7.45',
            },
        ]

        const columns = [
            <DataTableColumn
                key="date"
                label={<div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '.65rem' }}>{"Date"}<span style={{ color: 'red' }}>{'*'}</span></div>
                    <div style={{ fontSize: '.65rem' }}>{"(DD/MM/YYYY)"}</div>
                </div>}
                property="Date"
            />,

            <DataTableColumn
                key="callReceived"
                label={<div>
                    <div style={{ fontSize: '.65rem' }}>{"Call Received"}<span style={{ color: 'red' }}>{'*'}</span></div>

                </div>}

                property="callReceived"
            />,

            <DataTableColumn key="enRoute" label={<div>
                <div style={{ fontSize: '.65rem' }}>{"En Route"}<span style={{ color: 'red' }}>{'*'}</span></div>

            </div>} property="enRoute" />,

            <DataTableColumn key="arrivedAtScene" label={<div>
                <div style={{ fontSize: '.65rem' }}>{"Arrived At Scene"}<span style={{ color: 'red' }}>{'*'}</span></div>

            </div>} property="arrivedAtScene" />,

            <DataTableColumn key="arrivedAtPatient" label={<div>
                <div style={{ fontSize: '.65rem' }}>{"Arrived At Patient"}<span style={{ color: 'red' }}>{'*'}</span></div>

            </div>} property="arrivedAtPatient" />,

            <DataTableColumn key="departScene"
                label={<div>
                    <div style={{ fontSize: '.65rem' }}>{"Depart Scene"}<span style={{ color: 'red' }}>{'*'}</span></div>

                </div>}
                property="departScene" />,

            <DataTableColumn key="atDestination" label={<div>
                <div style={{ fontSize: '.65rem' }}>{"At Destination"}<span style={{ color: 'red', fontSize: '.65rem' }}>{'*'}</span></div>

            </div>} property="atDestination" />,
        ];

        return <DataTable items={tableData} id="DataTableExample-1-default">
            {columns}
        </DataTable>
    }

    const getAccordianDetails = () => {
        return <>
            <div className="section-1">
                <span>Call Details</span>
                <div className="line">
                </div>
                <div className="m-t-b">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="w-20">
                            <div style={{ color: 'red' }}><b className="label-heading">Code to SCene </b> {'*'}</div>
                            <Input
                                assistiveText={{ label: 'My label' }}
                                id="assistiveLabel-id"
                                placeholder="My placeholder"
                                className="bor-rad"
                            />
                        </div>
                        <div className="w-50">
                            <div style={{ color: 'red' }}><b className="label-heading">Scene location address </b> {'*'}</div>
                            <Input
                                assistiveText={{ label: 'My label' }}
                                id="assistiveLabel-id"
                                placeholder="My placeholder"
                                className="bor-rad"
                            />
                        </div>
                        <div className="w-30">
                            <div style={{ color: 'red' }}><b className="label-heading">Scene location code </b> {'*'}</div>
                            <Input
                                assistiveText={{ label: 'My label' }}
                                id="assistiveLabel-id"
                                placeholder="My placeholder"
                                className="bor-rad"
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '.5rem 0 0 0' }}>
                        <div className="w-20">
                            <div style={{ color: 'red' }}><b className="label-heading">Code from SCene </b> {'*'}</div>
                            <Input
                                assistiveText={{ label: 'My label' }}
                                id="assistiveLabel-id"
                                placeholder="My placeholder"
                                className="bor-rad"
                            />
                        </div>
                        <div className="w-50">
                            <div style={{ color: 'red' }}><b className="label-heading">Destination location address </b> {'*'}</div>
                            <Input
                                assistiveText={{ label: 'My label' }}
                                id="assistiveLabel-id"
                                placeholder="My placeholder"
                                className="bor-rad"
                            />
                        </div>
                        <div className="w-30">
                            <div style={{ color: 'red' }}><b className="label-heading">Destination location code </b> {'*'}</div>
                            <Input
                                assistiveText={{ label: 'My label' }}
                                id="assistiveLabel-id"
                                placeholder="My placeholder"
                                className="bor-rad"
                            />

                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'end' }}>
                        <div className="w-70 m-t-1 ">
                            {getTable()}
                        </div>
                        <div className="w-30">
                            <div style={{ color: 'red' }}><b className="label-heading">Estimate time of injury </b> {'*'}</div>
                            
                            <Input
                                assistiveText={{ label: 'My label' }}
                                id="assistiveLabel-id"
                                placeholder="My placeholder"
                                className="bor-rad"
                            />
                        </div>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'end', paddingRight:'1.25rem' }}>
                    <div className="w-70 edit-section">
                            

                            <Button
                                className="btn"
                                label="Update Times"
                            />
                            </div>
                      
                    </div>
                    <div style={{ display: 'flex', alignItem: 'center'}}>
                    <div className="w-20">
                            <div style={{ color: 'red' }}><b className="label-heading"># of patients transported </b> {'*'}</div>
                            <Input
                                assistiveText={{ label: 'My label' }}
                                id="assistiveLabel-id"
                                placeholder="My placeholder"
                                className="bor-rad"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
    const [expanded, setExpanded] = React.useState({})
    const itemsList = {

        items: [
            {
                id: '1',
                summary: 'Identification',
                details: getAccordianDetails(),
            },
            {
                id: '2',
                summary: 'Assessment',
                details: (<>
                    {'Assessment details'}
                </>),
            },
            {
                id: '3',
                summary: 'Treatment',
                details: (<>
                    {'Treatment Deails'}
                </>),
            },
            {
                id: '4',
                summary: 'Transfer of care',
                details: (<>
                    {'Transfer of care Deails'}
                </>),
            },
        ],
    };



    const togglePanel = (event, data) => {
        
        setExpanded({
            [data.id]: !expanded[data.id]
        })

    }



    return <div style={{ backgroundColor: 'white' }}>
        <Accordion id="base-example-accordion">
            {itemsList?.items?.map((ele, index) => {
                return <AccordionPanel
                    expanded={!!expanded[ele.id]}
                    id={ele.id}
                    key={ele.id}
                    onTogglePanel={(event) => togglePanel(event, ele)}
                    summary={ele.summary}
                >
                    {ele.details}
                </AccordionPanel>
            })}

        </Accordion>



    </div>
}

export default AccordianExample