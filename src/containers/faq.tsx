import React, {useState} from 'react';
import Accordion from '../components/accordion';
import OptForm from '../components/opt-form';
import { FagItem } from '../context/types';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
    const [toggleItem, setToggleItem] = useState<FagItem|null>(null)
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {faqsData.map((item:FagItem) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header itemName={""+item.id}>{item.header}</Accordion.Header>
                        <Accordion.Body itemName={""+item.id} selectedItem={toggleItem}>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion.Frame>

            <OptForm> 
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Area>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                </OptForm.Area>
            </OptForm>
        </Accordion>
    );
}
