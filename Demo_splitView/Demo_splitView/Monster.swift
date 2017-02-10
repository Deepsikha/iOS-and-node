//
//  Monster.swift
//  Demo_splitView
//
//  Created by devloper65 on 2/7/17.
//  Copyright © 2017 LaNet. All rights reserved.
//

import UIKit

//an enum that defines a number of weapon options
enum Weapon {
    case Blowgun, NinjaStar, Fire, Sword, Smoke
}

class Monster {
    let name: String
    let description: String
    let iconName: String
    let weapon: Weapon
    
    // designated initializer for a Monster
    init(name: String, description: String, iconName: String, weapon: Weapon) {
        self.name = name
        self.description = description
        self.iconName = iconName
        self.weapon = weapon
    }
    
    // Convenience method for fetching a monster's weapon image
    func weaponImage() -> UIImage? {
        switch self.weapon {
        case .Blowgun:
            return UIImage(named: "blowgun.png")
        case .Fire:
            return UIImage(named: "fire.png")
        case .NinjaStar:
            return UIImage(named: "ninjastar.png")
        case .Smoke:
            return UIImage(named: "smoke.png")
        case .Sword:
            return UIImage(named: "sword.png")
        }
    }
}
