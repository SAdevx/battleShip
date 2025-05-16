import { Ship } from '../src/ship'

describe('test ship class', () => {
  test('test hit function when false', () => {
    const ship = new Ship(4)
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBeFalsy()
  })

  test('test hit function when true', () => {
    const ship = new Ship(4)
    ship.hit()
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBeTruthy()
  })
})