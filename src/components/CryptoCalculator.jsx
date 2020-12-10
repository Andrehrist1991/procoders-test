import React, { useState, useEffect } from 'react';
import { Form, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { connect } from 'react-redux';



const CryptoCalculator = ({ changeRates, selectedCrypto, uahPrice, rubPrice }) => {

    const radios = [
        { name: "UAH", value: 1, price: uahPrice },
        { name: "USD", value: 2, price: changeRates.usd },
        { name: "RUR", value: 3, price: rubPrice },
    ];

    const [queryValue, setQueryValue] = useState('0');
    const [radioValue, setRadiovalue] = useState('1');
    const [currencyPrice, setCurrencyPrice] = useState(uahPrice);

    useEffect(() => {
        setCurrencyPrice(changeRates.uah)
    }, [uahPrice, rubPrice]);

    const onChangeCurrency = (val) => {
        setRadiovalue(val);
        setCurrencyPrice(radios[val -1].price);
    }

    console.log(uahPrice)
    console.log(rubPrice)

    const cryptoPrice = parseFloat(selectedCrypto.priceUsd);

    const multiplication = parseFloat(cryptoPrice * currencyPrice);

    return (
        <div className="calculator__wrap">
            <Form>
                <Form.Label>Volume: </Form.Label>
                <Form.Control type="number" placeholder="0" onChange={(e) => setQueryValue(e.target.value)} />
                <ToggleButtonGroup type="radio" name="radio" defaultValue={1}>
                    {changeRates && radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => onChangeCurrency(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </Form>
            <p><b>{queryValue} {selectedCrypto.symbol}</b> will be <b>{(queryValue * multiplication).toFixed(1)} in {radios[radioValue - 1].name}</b></p>
        </div>
    )
};

const mapStateToProps = (state) => ({
    selectedRadio: state.radioValue,
});

export default connect(mapStateToProps)(CryptoCalculator);
