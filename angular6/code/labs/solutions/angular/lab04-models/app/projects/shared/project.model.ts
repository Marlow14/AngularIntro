export class Project {
  id: number;
  name: string;
  description: string;
  editing: boolean;
  imageUrl: string = 'http://placehold.it/500x300/e4d2ba';
  contractTypeId: number;
  isActive: boolean;
  contractSignedOn: Date;
  budget: number;

  constructor(obj?: any) {
    this.id = (obj && obj.id) || null;
    this.name = (obj && obj.name) || null;
    this.description = (obj && obj.description) || null;
    this.contractTypeId = (obj && obj.contractTypeId) || null;
    this.isActive = (obj && obj.isActive) || false;
    this.contractSignedOn = (obj && obj.contractSignedOn) || new Date();
    this.budget = (obj && obj.budget) || 0;
  }
}

let project = new Project({ name: 'Acme Website Redesign', budget: 30000 });
